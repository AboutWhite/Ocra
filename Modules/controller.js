import model from './model.js';
import view from './view.js'
import dataHelper from './dataHelper.js';


   const nounButton = document.getElementById('noun-button');
   const verbButton = document.getElementById('verb-button');
   const generateButton = document.getElementById('generate-button');
   const verbField = document.getElementById('Vergangenheit');
   const clearButton = document.getElementById('clear-button');
   const addButton = document.getElementById('add-button');
   const transField = document.getElementById('translation');
   const textInputs = document.querySelectorAll("input[type='text']");
   const downloadButton = document.getElementById('download-button');
  
   let verb = '';

    async function init(){
        //zuerst will ich die Vokabeln aus der csv Laden 
        //const words = await dataService.fetchVocabularyData("./Data/Nomen.csv","./Data/Verben.csv");
        const nouns = await dataHelper.fetchVocabularyData("./Data/Nomen.csv");
        const verbs = await dataHelper.fetchVocabularyData("./Data/Verben.csv");
        model.setNounData(nouns);
        model.setVerbData(verbs);

        setListeners();
        view.updateUI();
    };

    function setListeners(){
        nounButton.addEventListener('click', onNounClick);
        verbButton.addEventListener('click', onVerbClick);
        generateButton.addEventListener('click', onGenerateClick);
        verbField.addEventListener('input',onInput);
        clearButton.addEventListener('click',onClear);
        addButton.addEventListener('click',onAddVocabulary);
        transField.addEventListener('input',onTransInput);
        downloadButton.addEventListener('click', onDownload);
        
    }

    function onDownload(){
        console.log("download");
        if(view.mode==="Verb"){

            console.log("download");
            const data = dataHelper.download(model.verbData);
             // Erstellen Sie ein Blob-Objekt mit dem CSV-Inhalt
            const blob = new Blob([data], { type: "text/csv" });

            // Erzeugen Sie einen URL für den Blob
            const url = URL.createObjectURL(blob);

            // Erstellen Sie einen Download-Link
            const a = document.createElement("a");
            a.href = url;
            a.download = "data.csv"; // Dateiname für den Download

            // Klicken Sie auf den Download-Link und entfernen Sie ihn anschließend
            a.click();
            URL.revokeObjectURL(url);
        }
        
    }



    function onAddVocabulary(){

        textInputs.forEach(function (textInput) {
            if (textInput.value.trim() === "") {
                textInput.value = "-";
            }
        });
            if(view.mode==="Nomen"){
                model.addNoun(view.getData());
            }else if(view.mode==="Verb"){
                model.addVerb(view.getData());
                view.clearData();
                verb="";
                addButton.setAttribute('disabled', true);
                generateButton.setAttribute('disabled', true);
        }
    }


    function onClear(){
        view.clearData();
        verb="";
        generateButton.setAttribute('disabled', true);
        addButton.setAttribute('disabled', true);
    }

    function onNounClick(){
        nounButton.classList.add('active');
        verbButton.classList.remove('active');
        view.toggleMode("Nomen");
        view.updateUI();
    }
    function onVerbClick(){
        verbButton.classList.add('active');
        nounButton.classList.remove('active');
        view.toggleMode("Verb");
        view.updateUI();
    }
    function onGenerateClick(){
        view.setErrorText("");
    
        let verbForm = dataHelper.checkVerbform(verb);
        console.log("Verbform: "+verbForm);

        if (verbForm=== 0){
            view.setErrorText("Überprüfe die Eingabe nochmal");
            let data = dataHelper.generateVerbData(0,verb);
            view.setData(data);
        }else if (verbForm === 2){
            let data = dataHelper.generateVerbData(2,verb);
            view.setData(data);
        }else if(verbForm === 1){
            let data = dataHelper.generateVerbData(1,verb);
            view.setData(data);

        }

    }
    function onInput(){
        const vergangenheitInput = verbField.value.trim();
        // Aktiviere den Button, wenn das Feld Vergangenheit nicht leer ist, andernfalls deaktiviere ihn
        if (vergangenheitInput !== '') {
            generateButton.removeAttribute('disabled');
            verb = vergangenheitInput;
        } else {
            generateButton.setAttribute('disabled', true);
        }
        if(transField.value.trim() !=='' && verbField.value.trim() !==''){
            addButton.removeAttribute('disabled');
        }else{
            addButton.setAttribute('disabled', true);
        }
    }

    function onTransInput(){
        if(verbField.value.trim() !==''&& transField.value.trim() !==''){
            addButton.removeAttribute('disabled');
        }else{
            addButton.setAttribute('disabled', true);
        }
    }

   


export {init};