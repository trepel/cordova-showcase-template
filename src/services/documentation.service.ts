import {Injectable} from "@angular/core";
import { App } from 'ionic-angular';
import { DocumentationPage } from '../pages/documentation/documentation';


@Injectable()
export class DocumentationService {
  public static URL_GUIDES : string = "https://aerogear.org/community/#guides";
  public static URL_HOMEPAGE : string = "https://aerogear.org/";
  public static URL_IDM : string = "https://docs.aerogear.org/aerogear/latest/showcase/idm.html";
  public static URL_METRICS : string = "https://docs.aerogear.org/aerogear/latest/showcase/metrics.html";
  public static URL_PUSH : string = "https://docs.aerogear.org/aerogear/latest/showcase/push.html";
  public static URL_DEVICE_SECURITY : string = "https://docs.aerogear.org/aerogear/latest/security/index.html";
  
  constructor(private app: App) {
  }

  open (url: string) {
    var nav = this.app.getActiveNav();
    nav.setRoot(DocumentationPage, { 'linkParam': url })
  } 
  
}