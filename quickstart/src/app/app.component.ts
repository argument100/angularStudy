import { Component } from '@angular/core';

export class Member {
  id: number;
  name: string;
}

const MEMBERS: Member[] = [
  { id: 11, name: '武山 岳大' },
  { id: 12, name: '駒倉 光紀' },
  { id: 13, name: '長田 研太' },
  { id: 14, name: '高藤 友梨香' },
  { id: 15, name: '浜崎 貴之' },
  { id: 16, name: '緑川 睦' },
  { id: 17, name: '森谷 怜奈' },
  { id: 18, name: '大槻 祐大' },
  { id: 19, name: '岩野 紀之' },
  { id: 20, name: '佐々木 小次郎' },
];

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
  ]
})
export class AppComponent {
  title = "自社社員名簿";
  members = MEMBERS;
  selectedMember: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
