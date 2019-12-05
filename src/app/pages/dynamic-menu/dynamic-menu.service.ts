import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { VerticalMenuComponent } from '../../theme/components/menu/vertical-menu/vertical-menu.component';
import { Menu } from '../../theme/components/menu/menu.model';

@Injectable()
export class DynamicMenuService {

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private applicationRef: ApplicationRef,
                private injector: Injector) { }     
    
    addNewMenuItem(component: any, menuItems:Array<Menu>, menuItem) {

        const lastId = menuItems[menuItems.length-1].id;
        const newMenuItem = new Menu(lastId+1, menuItem['title'], menuItem['routerLink'], menuItem['href'], menuItem['icon'], menuItem['target'], menuItem['hasSubMenu'], parseInt(menuItem['parentId']));
                
        menuItems.push(newMenuItem);
        let item = menuItems.filter(item=>item.id == newMenuItem.parentId)[0];
        if(item) item.hasSubMenu = true;  

        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);        
        
        this.applicationRef.attachView(componentRef.hostView);
        
        let instance = <VerticalMenuComponent>componentRef.instance;
        instance.menuItems = menuItems;
        instance.menuParentId = 0;

        const elem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        
        const sidenav = document.getElementById('sidenav-menu-outer');        
        sidenav.replaceChild(elem, sidenav.children[0]);     
        
    } 
}