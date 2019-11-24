import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Navbar, NavController } from 'ionic-angular';

@Component({
  selector: 'qg-navbar',
  templateUrl: 'qg-navbar.html',
})
export class QgNavbarComponent implements AfterViewInit {
  @Input()
  public title: string;
  @Input()
  public hideBackButton: boolean = false;

  @Output()
  private onBack = new EventEmitter<void>();

  @ViewChild(Navbar)
  private navBar: Navbar;

  constructor(public navCtrl: NavController) {}

  ngAfterViewInit() {
    this.navBar.setBackButtonText('');
    this.navBar.backButtonClick = (event: UIEvent) => {
      this.onBack.emit();
      this.navCtrl.pop();
    };
  }
}
