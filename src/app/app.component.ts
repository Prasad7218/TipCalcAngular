import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  public amt: number;
  public per: number;
  public tip: number;
  public tip2: number;
  public percentNum: number;

  changeHandler(event: any) {
    this.percentNum = event.target.value;
  }

  calculateTip() {
    this.tip = Math.round(this.amt * this.percentNum);
    this.tip2 = Math.round(this.tip / this.per);
  }
}
