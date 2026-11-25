import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule],
  templateUrl: './test-form.html',
  styleUrl: './test-form.css',
})


export class TestForm {
  name = '';
  country = '';
  tempName = "";
  tempCount = "";
  users: User[] = [];
  isEditing = false;

  addUser(){
    if(!this.name.trim() && !this.country.trim()){
      return;
    }
      this.users.push({id: this.users.length + 1, name:this.name, country:this.country});
      this.name = '';
      this.country = '';
  }

  deleteUser(index:number){
    this.users.splice(index, 1);
  }

  editUser(index: number) {
    this.isEditing = true;
    const user = this.users[index];
    this.tempName = user.name;
    this.tempCount = user.country;
  }

  saveUser(index: number){
    this.isEditing = false;
    this.users[index] = {
      ...this.users[index], name: this.tempName, country: this.tempCount
    };
    this.tempName = '';
    this.tempCount = '';
  }

  alert(){
    alert(JSON.stringify(this.users));
  }
}
