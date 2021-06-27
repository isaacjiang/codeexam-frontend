import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface FolderAndFiles {
  name: string;
  lastModifiedTime: string;
  type: string;
  size: number;
  parent: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public folderAndFilesList: FolderAndFiles[] = [
    // {lastModifiedTime:'2021-01-17 23:21:43',size:0,name:'.sudo_as_admin_successful',type:'File'},
    // {lastModifiedTime:'2021-06-25 04:18:27',size:152,name:'.bash_history',type:'File'},
    // {lastModifiedTime:'2020-07-03 18:56:04',size:220,name:'.bash_logout',type:'File'},
    // {lastModifiedTime:'2020-07-03 18:56:04',size:807,name:'.profile',type:'File'},
    // {lastModifiedTime:'2020-09-08 18:14:41',size:863,name:'.nvidia-settings-rc',type:'File'},
    // {lastModifiedTime:'2020-07-03 18:56:04',size:3771,name:'.bashrc',type:'File'},
    // {lastModifiedTime:'2020-10-19 18:54:18',size:4096,name:'Pictures',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:40',size:4096,name:'Videos',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:40',size:4096,name:'Desktop',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:40',size:4096,name:'Music',type:'Directory'},
    // {lastModifiedTime:'2020-08-13 14:45:58',size:4096,name:'.thunderbird',type:'Directory'},
    // {lastModifiedTime:'2020-08-13 14:45:23',size:4096,name:'.nv',type:'Directory'},
    // {lastModifiedTime:'2020-08-19 19:04:17',size:4096,name:'.ssh',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:40',size:4096,name:'Public',type:'Directory'},
    // {lastModifiedTime:'2021-01-17 23:49:23',size:4096,name:'.android',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:37',size:4096,name:'.local',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:40',size:4096,name:'Templates',type:'Directory'},
    // {lastModifiedTime:'2021-06-24 23:30:05',size:4096,name:'.config',type:'Directory'},
    // {lastModifiedTime:'2021-06-24 23:34:18',size:4096,name:'.jdks',type:'Directory'},
    // {lastModifiedTime:'2020-07-03 19:07:40',size:4096,name:'Documents',type:'Directory'},
    // {lastModifiedTime:'2021-01-17 23:17:46',size:4096,name:'snap',type:'Directory'},
    // {lastModifiedTime:'2021-06-24 23:34:07',size:4096,name:'.m2',type:'Directory'},
    // {lastModifiedTime:'2020-07-09 14:39:02',size:4096,name:'.mozilla',type:'Directory'},
    // {lastModifiedTime:'2021-01-17 23:17:49',size:4096,name:'.java',type:'Directory'},
    // {lastModifiedTime:'2021-01-25 23:57:16',size:4096,name:'.gnupg',type:'Directory'},
    // {lastModifiedTime:'2020-07-09 14:47:20',size:4096,name:'.pki',type:'Directory'},
    // {lastModifiedTime:'2021-01-17 23:54:09',size:4096,name:'.cache',type:'Directory'},
    // {lastModifiedTime:'2021-06-24 23:44:18',size:4096,name:'Projects',type:'Directory'},
    // {lastModifiedTime:'2020-07-09 14:48:06',size:4096,name:'.gnome',type:'Directory'},
    // {lastModifiedTime:'2021-06-24 23:43:55',size:4096,name:'Downloads',type:'Directory'}
  ];

  public defaultRoot = 'home';
  public currentRootParent = 'home';

  constructor(private http: HttpClient) {
    this.queryFolderAndFilesList(this.defaultRoot);
  }

  public getFolderAndFilesList(): FolderAndFiles[] {

    return this.folderAndFilesList;
  }
  public queryFolderAndFilesList(root: string): FolderAndFiles[] {
    this.http.get('http://localhost:8080/api/file_list?root=' + root, {}).subscribe(resp => {
      //here send the result to message
      this.folderAndFilesList = resp['elements'];
      this.currentRootParent = root.substr(0, root.lastIndexOf('/'));
      console.log(this.currentRootParent);
    });
    return this.folderAndFilesList;
  }



}
