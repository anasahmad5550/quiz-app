import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetApiService } from './get-api.service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  countries_data: any[] = [];
  points: number = 0
  capital: string = ''
  answer: string = ''
  index: number = 0
  answerSelect: boolean = false
  wrong_answers: Array<string> = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands ", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe", "Palestine"];
  random_countries: Array<string> = ['']
  gameOver: boolean = false
  gameloose: boolean = false
  @ViewChild('myAnswer') myAnswer:any
  flag: string = ''

  constructor(private api:GetApiService){

  }

  checkAnswer(country: string, el: HTMLDivElement){
    if(!this.answerSelect){
        el.style.color = 'white'
      el.style.borderColor = 'transparent'
      this.answerSelect = true
      if (this.answer === country){
        this.points++
        console.log(this.points)

        el.style.backgroundColor = '#60BF88'
      }
      else{
        el.style.backgroundColor = '#EA8282'
        
        this.gameloose = true
      }
    }
  }

  tryAgain() {
    this.points = 0
    this.gameOver = false
    this.index = 0
    this.answerSelect = false
    this.gameloose = false
  }

  nextQuestion(){
    if (this.gameloose){
      this.gameOver = true
    }
    else{
          this.answerSelect = false
    this.index++
    if (this.index % 2 === 0 )
      this.flag = this.countries_data[this.index]['flag']
    else
      this.capital = this.countries_data[this.index]['capital']
    this.answer = this.countries_data[this.index]['name']
    const shuffled = this.wrong_answers.sort(() => 0.5 - Math.random());
    this.random_countries = shuffled.slice(0, 3);
    this.random_countries.push(this.answer)
    this.random_countries = this.random_countries.sort(() => 0.5 - Math.random());
    }
  }

  ngOnInit(){

    this.api.apiCall().subscribe((data: any) => {
      this.countries_data = data
      const shuffled = this.wrong_answers.sort(() => 0.5 - Math.random());
      this.random_countries = shuffled.slice(0, 3);
      // this.capital = data[0]['capital']
      this.flag = data[0]['flag']
      this.answer = data[0]['name']
      this.random_countries.push(this.answer)
      this.random_countries = this.random_countries.sort(() => 0.5 - Math.random());
      console.log(this.random_countries)

    })
  }
}
