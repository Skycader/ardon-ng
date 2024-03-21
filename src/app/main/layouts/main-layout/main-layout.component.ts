import { Component } from '@angular/core';
import { ConfigService } from '../../../ardon-core/services/config.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ardon-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  public showContent: boolean = true;

  constructor(
    public configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((response) => { });
    this.titleService.setTitle('Ваш Ландшафтник');
  }

  ngAfterViewInit() { }
}
