import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../../Services/dictionary.service';

@Component({
  selector: 'Home',
  templateUrl: './Home.html',
  styles: [`

    .container{
      width: 550px;
      height: 300px;
      margin: 0 auto;
      border: 1px solid rgba(0,0,255,.3)
    }
    
    .searchOptions{
      margin: 5px;
      height: 50px;
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: center;
    }

    .searchOptions .textInput{
      width: 200px;
      padding: 5px;
      font-size: 12px;
    }
    
    .searchOptions .buttonOptions{
      width: 350px;
      margin-left: 10px;
      padding: 5px;
    }



    .resultDisplay{
      margin: 5px;
      padding: 5px;
      width: 300px;
      text-align: left;
      height: 200px;
      overflow-y: auto;
      font-size: 16px;
      text-transform: capitalize;
    }

    .result:hover{
      border-bottom: 1px solid
    }


    input{
      background-color: white;
      width: 100%;
      padding: 8px;
      margin: 0 2px;
      font-size: 14px;
      box-sizing: border-box;
      border: none;
      border-bottom: 2px solid;      
    }

    input:focus, input:hover {
      border: 1px solid #555555;
      border-radius: 4px
    }

    button {
      background-color: #e7e7e7;
      border: none;
      color: black;
      padding: 10px;
      margin: 0 2px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 12px;
      border-radius: 8px;
      transition-duration: 0.4s;
    }

    button:hover, .buttonSelected{
      background-color: #555555;
      color: white;
    }

  `]
})

export class Home implements OnInit {

  buttonSelected: string = 'Synonym';
  searchText: string = "thesaurus";

  results: any[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {

    this.loadResult();
  }

  loadResult(){

    this.results = [];

    if(this.buttonSelected == 'Homophone') this.getHomophones();
    if(this.buttonSelected == 'Rhyming') this.getRhymingWords();
    if(this.buttonSelected == 'Synonym') this.getSynonym();
    if(this.buttonSelected == 'Antonym') this.getAntonym();
  }
  
  getHomophones(){  
      this.dictionaryService.getHomophones(this.searchText)
      .subscribe(
        data => this.setResult(data),
        error => console.log(error)
      )    
  }
  
  getRhymingWords(){
    this.dictionaryService.getRhymingWords(this.searchText)
    .subscribe(
      data => this.setResult(data),
      error => console.log(error)
    )
  }

  getSynonym(){  
      this.dictionaryService.getSynonym(this.searchText)
      .subscribe(
        data => this.setResult(data),
        error => console.log(error)
      )    
  }
  
  getAntonym(){
    this.dictionaryService.getAntonym(this.searchText)
    .subscribe(
      data => this.setResult(data),
      error => console.log(error)
    )
  }

  setResult(data){
    console.log(data);
    this.results = data;
  }

  
}
