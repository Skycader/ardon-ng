import { Component } from '@angular/core';
import { CardConfigInterface } from '../../../ardon-common/models/cardConfig.interface';
import { ProfileComponentsClass } from '../../data/profile.components.class';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ardon-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.scss',
})
export class ProfileLayoutComponent {
  public user = {
    isSignedIn: false,
  };
  public components: CardConfigInterface[] = new ProfileComponentsClass()
    .components;

  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('Личный кабинет');
  }
}
