const dataHelper = {

    checkVerbform(verb){
        const shadda = '\u0651';
        const alif = '\u0627';
        const alifHamza= '\u0623';
        const sukun = '\ufe7e';
        const ta = '\u062a';
        const nun = '\u0646';
     

        
        //wenn es kein shadda gibt und das wort 3 buchstaben hat
        if(verb.length === 3 && verb.indexOf(shadda)===-1){
            return 1;
        
        //wenn es shadda gibt und das wort 3 buchstaben hat
        }else if(verb.indexOf(shadda)!==-1 && verb.length === 4){
            return 2;
        }
        //wenn es keins hadda gibt und das wort 4 buchstaben hat und der zweite alif ist
        else if(verb.indexOf(shadda)===-1 && verb.length === 4 && verb.indexOf(alif)===1){
            return 3;
        }
        //4 buchstaben, ta als erster und shadde auf 3 buchstaben
        else if((verb.length === 4|| verb.length ===5) && verb[0]=== ta && verb[2]!== alif){
            return 5;
        }
        // 5 buchstaben präfix ta und alif an dritter stelle
        else if(verb.length ===5 && verb[0]===ta && verb[2]=== alif){
            return 6;
        }
        // 5 buchstaben prefix alif und nun
        else if(verb.length ===5 && verb[0]=== alif && verb[1]=== nun){
            return 7;
        }
        else{
            return 0;
        }  
    },

    generateVerbData(form, verb){
        let data;
        if(form===1){
            if(verb[2]==='\u0649'){
                data=this.makeHollow(verb);
            }else{
                data=this.makeForm1(verb);
            }
         
        }else if(form === 2){
            data = this.makeForm2(verb);
        }else if(form === 3){
            data= this.makeForm3(verb);
        }else if(form === 4){
            data= this.makeForm4(verb);
        }else if(form === 5){
            data= this.makeForm5(verb);
        }else if(form === 6){
            data= this.makeForm6(verb);
        }else if(form === 7){
            data= this.makeForm7(verb);
        }else{
            data = this.makeDefault(verb);
        }
        return data;

    },


    makeHollow(verb){

        let char1 = verb[0];
        let char2 = verb[1];
        let char3 = '\u064a';
        const kasrah= '\u0650';
        const fatah = '\u064E';
        const alif = '\u0627';
        const sukun = '\u0652';
        const damma = '\u064f';
        const yaa =  '\u0649';

       

        let values = {
            verg_1: char1+fatah+char2+char3+"ت",
            verg_2: char1+fatah+char2+char3+"نا",
            verg_3: char1+fatah+char2+char3+"ت",
            verg_4: char1+fatah+char2+char3+"تي",
            verg_5: char1+fatah+char2+char3+"توا",
            verg_6: char1+fatah+char2+char3,
            verg_7: char1+fatah+char2+char3+"ت",
            verg_8: char1+fatah+char2+"وا",
            geg_1: alif+char1+sukun+char2+char3,
            geg_2:"ن"+char1+sukun+char2+char3,
            geg_3:"ت"+char1+sukun+char2+char3,
            geg_4:"ت"+char1+sukun+char2+"ي",
            geg_5:"ت"+char1+sukun+char2+"وا",
            geg_6:"ي"+char1+sukun+char2+char3,
            geg_7:"ت"+char1+sukun+char2+char3,
            geg_8:"ي"+char1+sukun+char2+"وا",
            imp_1:alif+char1+sukun+char2+char3,
            imp_2:alif+char1+sukun+char2+char3,
            imp_3:alif+char1+sukun+char2+"وا",
            ap_1:char1+alif+char2+char3,
            ap_2:char1+alif+char2+char3+"ة",
            ap_3:char1+alif+char2+char3+"ين",
            pass:"م"+fatah+char1+sukun+char2+char3,
        }

        return values;

    },
    makeForm1(verb){

        let char1 = verb[0];
        let char2 = verb[1];
        let char3 = verb[2];
        const kasrah= '\u0650';
        const fatah = '\u064E';
        const alif = '\u0627';
        const sukun = '\u0652';
        const damma = '\u064f';

        console.log(char1);
        console.log(char2);
        console.log(char3);

        let values = {
            verg_1: char1+fatah+char2+fatah+char3+"ت",
            verg_2: char1+fatah+char2+fatah+char3+"نا",
            verg_3: char1+fatah+char2+fatah+char3+"ت",
            verg_4: char1+fatah+char2+fatah+char3+"تي",
            verg_5: char1+fatah+char2+fatah+char3+"توا",
            verg_6: char1+fatah+char2+fatah+char3,
            verg_7: char1+fatah+char2+fatah+char3+kasrah+"ت",
            verg_8: char1+fatah+char2+fatah+char3+"وا",
            geg_1: alif+char1+sukun+char2+damma+char3,
            geg_2:"ن"+char1+sukun+char2+damma+char3,
            geg_3:"ت"+char1+sukun+char2+damma+char3,
            geg_4:"ت"+char1+sukun+char2+damma+char3+"ي",
            geg_5:"ت"+char1+sukun+char2+damma+char3+"وا",
            geg_6:"ي"+char1+sukun+char2+damma+char3,
            geg_7:"ت"+char1+sukun+char2+damma+char3,
            geg_8:"ي"+char1+sukun+char2+damma+char3+"وا",
            imp_1:char1+sukun+char2+damma+char3,
            imp_2:char1+sukun+char2+damma+char3+"ي",
            imp_3:char1+sukun+char2+damma+char3+"وا",
            ap_1:char1+alif+char2+kasrah+char3,
            ap_2:char1+alif+char2+kasrah+char3+"ة",
            ap_3:char1+alif+char2+kasrah+char3+"ين",
            pass:"م"+kasrah+char1+sukun+char2+damma+char3,
        }

        return values;

    },

    
    makeform3(verb){
        let char1 = verb[0];
        let char2 = verb[2];
        let char3 = verb[3];
        const kasrah= '\u0650';
        const fatah = '\u064E';
        const alif = '\u0627';
        const sukun = '\ufe7e';
        const damma = '\u064f';

        let values = {
            verg_1: char1+alif+char2+fatah+char3+"ت",
            verg_2: char1+alif+char2+fatah+char3+"نا",
            verg_3: char1+alif+char2+fatah+char3+"ت",
            verg_4: char1+alif+char2+fatah+char3+"تي",
            verg_5: char1+alif+char2+fatah+char3+"توا",
            verg_6: char1+alif+char2+fatah+char3,
            verg_7: char1+alif+char2+fatah+char3+kasrah+"ت",
            verg_8: char1+alif+char2+fatah+char3+"وا",
            geg_1:    char1+alif+char2+kasrah+char3,
            geg_2:"ن"+char1+alif+char2+kasrah+char3,
            geg_3:"ت"+char1+alif+char2+kasrah+char3,
            geg_4:"ت"+char1+alif+char2+kasrah+char3+"ي",
            geg_5:"ت"+char1+alif+char2+kasrah+char3+"وا",
            geg_6:"ي"+char1+alif+char2+kasrah+char3,
            geg_7:"ت"+char1+alif+char2+kasrah+char3,
            geg_8:"ي"+char1+alif+char2+kasrah+char3+"وا",
            imp_1:char1+alif+char2+kasrah+char3,
            imp_2:char1+alif+char2+kasrah+char3+"ي",
            imp_3:char1+alif+char2+kasrah+char3+"وا",
            ap_1:"م"+damma+char1+alif+char2+kasrah+char3,
            ap_2:"م"+damma+char1+alif+char2+kasrah+char3+"ة",
            ap_3:"م"+damma+char1+alif+char2+kasrah+char3+"ين",
            pass:"م"+damma+char1+alif+char2+fatah+char3,
        }
        return values;


    },
    makeDefault(verb){
       let val=  verb.replace(/[\u064B-\u0652]/g, '');
        let values = {
            verg_1: val,
            verg_2: val,
            verg_3: val,
            verg_4: val,
            verg_5: val,
            verg_6: val,
            verg_7: val,
            verg_8: val,
            geg_1: val,
            geg_2:val,
            geg_3:val,
            geg_4:val,
            geg_5:val,
            geg_6:val,
            geg_7:val,
            geg_8:val,
            imp_1:val,
            imp_2:val,
            imp_3:val,
            ap_1:val,
            ap_2:val,
            ap_3:val,
            pass:val,
        }

        return values;

    },






    makeForm2(verb){
        let char1 = verb[0];
        let char2 = verb[1];
        let shadde = verb[2];
        let char3 = verb[3];
        const kasrah= '\u0650';
        const fatah = '\u064E';

        let values = {
            verg_1: char1+fatah+char2+shadde+fatah+char3+"ت",
            verg_2: char1+fatah+char2+shadde+fatah+char3+"نا",
            verg_3: char1+fatah+char2+shadde+fatah+char3+"ت",
            verg_4: char1+fatah+char2+shadde+fatah+char3+"تي",
            verg_5: char1+fatah+char2+shadde+fatah+char3+"توا",
            verg_6: char1+fatah+char2+shadde+fatah+char3,
            verg_7: char1+fatah+char2+shadde+fatah+char3+kasrah+"ت",
            verg_8: char1+fatah+char2+shadde+fatah+char3+"وا",
            geg_1: char1+fatah+char2+shadde+kasrah+char3,
            geg_2:"ن"+char1+fatah+char2+shadde+kasrah+char3,
            geg_3:"ت"+char1+fatah+char2+shadde+kasrah+char3,
            geg_4:"ت"+char1+fatah+char2+shadde+kasrah+char3+"ي",
            geg_5:"ت"+char1+fatah+char2+shadde+kasrah+char3+"وا",
            geg_6:"ي"+char1+fatah+char2+shadde+kasrah+char3,
            geg_7:"ت"+char1+fatah+char2+shadde+kasrah+char3,
            geg_8:"ي"+char1+fatah+char2+shadde+kasrah+char3+"وا",
            imp_1:char1+fatah+char2+shadde+kasrah+char3,
            imp_2:char1+fatah+char2+shadde+kasrah+char3+"ي",
            imp_3:char1+fatah+char2+shadde+kasrah+char3+"وا",
            ap_1:"م"+kasrah+char1+fatah+char2+shadde+kasrah+char3,
            ap_2:"م"+kasrah+char1+fatah+char2+shadde+kasrah+char3+"ة",
            ap_3:"م"+kasrah+char1+fatah+char2+shadde+kasrah+char3+"ين",
            pass:"م"+kasrah+char1+fatah+char2+shadde+fatah+char3,
        }

        return values;

    },

    async fetchVocabularyData(file) {
        const mwords = await fetch(file);
        const csvWords= await mwords.text();
        const final = this.parseCSV(csvWords);
        return final;
      },
    
       parseCSV(csvText) {
        //die daten der csv werden mit diesen keys eingelesen
        const tableHead1 = "Wort";
        const tableHead2 = "Übersetzung";
        const tableHead3 = "Spalte 3";
        const tableHead4 = "Tag";
        const tableHead5 = "Wortart";
        const tableHead6 = "Spalte 6";
        const tableHead7 = "Spalte 7";
        const tableHead8 = "Spalte 8";
        const tableHead9 = "Spalte 9";
        const tableHead10 = "Spalte 10";
    
        const headers = [tableHead1, tableHead2,tableHead3,tableHead4, tableHead5, tableHead6, tableHead7, tableHead8,tableHead9,tableHead10]; 
        const rows = Papa.parse(csvText, {
            delimiter: ",",
            header: false, // Deaktiviere die Verwendung der ersten Zeile als Überschriften
            dynamicTyping: true
        }).data.slice(1); // Überspringe die erste Zeile;
        return rows.map(row => {
            const entry = {};
            headers.forEach((header, index) => {
                entry[header] = row[index];
            });
            return entry;
        });
      },

      download(data){
        // CSV-Header, entsprechend Ihren Objekteigenschaften
        let csvContent = "Wort,Übersetzung,Spalte 3,Tag,Wortart,Spalte 6,Spalte 7,Spalte 8,Spalte 9,Spalte 10\n"; 
        data.forEach(obj => {
            csvContent += `"${obj['Wort']}","${obj['Übersetzung']}","${obj['Spalte 3']}","${obj['Tag']}","${obj['Wortart']}","${obj['Spalte 6']}","${obj['Spalte 7']}","${obj['Spalte 8']}","${obj['Spalte 9']}","${obj['Spalte 10']}"\n`;
        });

        return csvContent;

        
      }
    
}


export default dataHelper;