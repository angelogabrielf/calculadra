import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importe o AlertController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  operation: string = 'add';

  constructor(private alertController: AlertController) {} // Injete o AlertController

  segmentChanged(event: any) {
    this.operation = event.detail.value;
  }

  async calculateResult() {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      if (this.operation === 'divide' && this.num2 === 0) {
        this.result = null;
      } else {
        switch (this.operation) {
          case 'add':
            this.result = this.num1 + this.num2;
            break;
          case 'subtract':
            this.result = this.num1 - this.num2;
            break;
          case 'multiply':
            this.result = this.num1 * this.num2;
            break;
          case 'divide':
            this.result = this.num1 / this.num2;
            break;
          default:
            this.result = null;
        }
      }

      if (this.result !== null) {
        await this.presentAlert('Resultado', `O resultado é: ${this.result}`);
      }
    } else {
      this.result = null;
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
