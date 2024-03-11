import { Component } from '@angular/core';
import { ConfigService } from '../../../ardon-core/services/config.service';
import { ActivatedRoute } from '@angular/router';

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
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((response) => { });
  }

  ngAfterViewInit() { }
}
