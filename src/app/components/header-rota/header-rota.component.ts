import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header-rota',
  templateUrl: './header-rota.component.html',
  styleUrls: ['./header-rota.component.scss'],
})
export class HeaderRotaComponent  implements OnInit {


  constructor(public router:ActivatedRoute) { 
    this.router.paramMap.subscribe((params:ParamMap)=>{
      const locailrout = (params.get('id'))
    })
  }

  ngOnInit() {}

  locailRoute($event: any) {
    console.log($event.detail.value);

  }

}
