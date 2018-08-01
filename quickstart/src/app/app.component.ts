import { Component, OnInit } from '@angular/core';
import { Member } from './member';

import { MemberService } from './member.service';

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <h2>社員一覧</h2>
    <ul class="members">
      <li *ngFor="let member of members" (click)="onSelect(member)" [class.selected]="member === selectedMember">
        <span class="badge">{{member.id}}</span> {{member.name}}
      </li>
    </ul>
    <member-detail [member]="selectedMember"></member-detail>
  `,

  styles: [
    `
      .selected {
        background-color: #cfd8dc !important;
        color: white;
      }
      .members {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .members li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #eee;
        margin: 0.5em;
        padding: 0.3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .members li.selected:hover {
        background-color: #bbd8dc !important;
        color: white;
      }
      .members li:hover {
        color: #607d8b;
        background-color: #ddd;
        left: 0.1em;
      }
      .members .text {
        position: relative;
        top: -3px;
      }
      .members .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607d8b;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: 0.8em;
        border-radius: 4px 0 0 4px;
      }
    `
  ],
  providers: [ MemberService ]
})
export class AppComponent implements OnInit {
  title = "自社社員名簿";
  members: Member[];
  selectedMember: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    // constructor実行後、初期化時に呼ばれるコールバック
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
  }
}
