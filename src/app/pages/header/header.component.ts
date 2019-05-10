import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from '../../services/localstorage.service';
import { routesWeb, DIALOG_TITLES } from '../../../environments/environment';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';

const dialogConfig = new MatDialogConfig();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isLoading:boolean=false;
  menuToolbar:any = [];
  urlActual: string = null;
  

 
  constructor(
    private _localStorage: LocalStorageService,
    //private _loginService: LoginService,
    private dialog:MatDialog,
    private _router:Router,
    
   )
  {

   
    try 
    {
   /* let menuStorage = this._localStorage.getMenu();
      console.log('LOCAL STORAGE ',menuStorage);
      this.menuToolbar = menuStorage.permisos;
/*
      _router.events
      .filter( event => 
        event instanceof NavigationEnd
      )
      .subscribe( (event: NavigationEnd) => 
      {
        this.urlActual = event.url;
      });*/
    }
    catch
    {
      console.log( 'Catch header ' );
      this._router.navigateByUrl(routesWeb.ROOT);
    }
  }

  ngOnInit() {
  }

  validaRutaMenu(urlMenu): string
  { 


    var rutaMenuActivo: string = "";

    if (urlMenu != null)
    {
      var nombreMenu: string = "";
      var nombreRuta: string = "";

      var arrayMenu = urlMenu.split("/");
      if (arrayMenu != null && arrayMenu.length > 0)
      {
        nombreMenu = arrayMenu[arrayMenu.length - 1];
      }

     /* var arrayRoute = this.urlActual.split("/");
      if (arrayRoute != null && arrayRoute.length > 0)
      {
        nombreRuta = arrayRoute[arrayRoute.length - 1];
        
        if (arrayRoute.length == 4){
           nombreRuta = arrayRoute[arrayRoute.length - 2];
        }      

        if (nombreRuta == 'crear-cliente')
        {
          nombreRuta = nombreRuta + "s";
        }
        if(nombreRuta.indexOf('admin-usuario') !== -1)
        {
        nombreRuta="usuarios" ;
        }
      }*/

      var regex = new RegExp(nombreMenu, "gi");
      if (regex.test(nombreRuta))
      {
        rutaMenuActivo = urlMenu;
      }



    }

    return rutaMenuActivo;
  }

  logout(){
    dialogConfig.disableClose = true;
    dialogConfig.data = { title: DIALOG_TITLES.LOGOUT, success:'logout' };
    const dialogRef = this.dialog.open( DialogConfirmComponent,dialogConfig );

    dialogRef.afterClosed().subscribe( resp => {
      if( resp == 'logout' ) {
        this._router.navigateByUrl(routesWeb.ROOT);
       // this._loginService.setIsLogged(false);
      }
    });
  }

}
