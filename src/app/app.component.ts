import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  loginstatus: { [key: string]: any } = {};
  isLogged: boolean; // 是否登录
  index = 0;
  tabs = [];
  tab: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('status'));
    console.log(sessionStorage.getItem('user_id'));
    console.log(sessionStorage.getItem('user_role'));
    console.log(sessionStorage.getItem('tab'));
    this.loginstatus.tab = sessionStorage.getItem('tab');
    if (sessionStorage.getItem('status')) {
      if (sessionStorage.getItem('status') === '1') {
        this.isLogged = true;
        // tslint:disable-next-line:radix
        this.loginstatus.status = parseInt(sessionStorage.getItem('status'));
        this.loginstatus.user_id = sessionStorage.getItem('user_id');
        // tslint:disable-next-line:radix
        this.loginstatus.user_role = parseInt(sessionStorage.getItem('user_role'));
        this.loginstatus.tab = sessionStorage.getItem('tab');
      }
    }
    console.log(window.location.href);
    const hre = window.location.href.split('/');
    console.log(hre[3]);
    if (!hre[3]) {
      this.tabs.push('钢铁行业数据看板');
      this.router.navigateByUrl('/kanban');
    }
    if (hre[3]) {
      this.tabs.push(this.loginstatus.tab);
      this.router.navigateByUrl(hre[3]);
      console.log(this.tabs);
    }
  }

  newTab(tab: string): void {

    if (this.tabs.indexOf(tab) === -1) {
      this.tabs.push(tab);
      console.log(this.tabs);
      this.index = this.tabs.length - 1;
      this.tab = this.tabs[this.tabs.length - 1];
      console.log(this.tab);
      sessionStorage.setItem('tab',  this.tab);

    } else {
      this.index = this.tabs.indexOf(tab);
      // this.index = 1;
    }

  }
  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  getLoginMsg(msg) {
    this.loginstatus = msg;
    this.isLogged = (msg.status === 1);
    sessionStorage.setItem('status', msg.status);
    sessionStorage.setItem('user_role', msg.user_role);
    sessionStorage.setItem('user_id', msg.user_id);
  }
  // 退出登录
  signOut() {
    sessionStorage.clear();
    this.router.navigateByUrl('/kanban');
    this.isLogged = false;
  }





}
