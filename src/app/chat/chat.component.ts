import { Component, inject } from '@angular/core';
import { GeminiService } from '../gemini.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  
  prompt:string='';
  geminiService: GeminiService= inject(GeminiService);
  loading:boolean = false;
  chatHistory:any[]=[];
  constructor(){
    this.geminiService.getMessageHistory().subscribe((res)=>{
      if(res){
        this.chatHistory.push(res);
      }
    })
  }
  
    sendData(){
      if(this.prompt){
        this.loading = true;
        this.geminiService.generateText(this.prompt); 
      }
    }
}
