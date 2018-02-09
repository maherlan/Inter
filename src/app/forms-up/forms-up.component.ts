//vender
import { Component, OnInit } from '@angular/core';


declare var $ :any;

@Component({
  selector: 'app-forms-up',
  templateUrl: './forms-up.component.html',
  styleUrls: ['./forms-up.component.css']
})
export class FormsUpComponent implements OnInit {

defaultOptions =
[
    'fullscreen', 'bold', 'italic', 'underline',
    'strikeThrough', 'subscript', 'superscript',
    '|', 'fontFamily', 'fontSize', 'color',
    'inlineStyle', 'paragraphStyle', '|',
    'paragraphFormat', 'align', 'formatOL',
    'formatUL', 'outdent', 'indent',
    'quote', '-', 'insertLink', 'insertImage',
    'insertVideo', 'embedly', 'insertFile',
    'insertTable', '|', 'emoticons', 'specialCharacters',
    'insertHR', 'selectAll', 'clearFormatting', '|',
    'print', 'spellChecker', 'help', 'html',
    '|','undo','redo'
  ];
  customOptions=['inputText','inputCheck'];
  public options: Object;

  constructor() {
    let options=[...this.defaultOptions,...this.customOptions];
console.log(options);
    this.options={
      toolbarButtons:options;
    }

   }

  ngOnInit() {

//inputText
    $.FroalaEditor.DefineIcon('inputText', {NAME: 'edit'});
    $.FroalaEditor.RegisterCommand('inputText', {
      title: 'Saisie libre',
      focus: false,
      undo: true,
      refreshAfterCallback: true,

      callback: function () {
        this.html.insert('<input type="text">');
        this.undo.saveStep();
      }
    });

    //inputCheck
        $.FroalaEditor.DefineIcon('inputCheck', {NAME: 'dot-circle-o'});
        $.FroalaEditor.RegisterCommand('inputCheck', {
          title: 'checkbox',
          focus: false,
          undo: true,
          refreshAfterCallback: true,

          callback: function () {
            this.html.insert('<input type="checkbox">');
            this.undo.saveStep();
          }
        });


  }

}
