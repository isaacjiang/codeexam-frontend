import { Component } from '@angular/core';
import { DataService, FolderAndFiles } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getFolderAndFilesList(): FolderAndFiles[] {
    return this.data.getFolderAndFilesList();
  }

  /** Click to current folder */
  click(message,event){
    console.log(message,event);
    if(message.type === 'Directory'){
      this.data.queryFolderAndFilesList(message.parent+'/'+message.name);
    }else{
      console.log('It is a file.');
    }
  }

  /** Click to parent folder */
  clickToBack(){
    this.data.queryFolderAndFilesList(this.data.currentRootParent);
  }

}
