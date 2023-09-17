const viewModel = {
    mode: "Nomen", // Initialer Modus


    translationField: document.getElementById('translation'),
    vergangenheitField: document.getElementById( "Vergangenheit"),
    tagField: document.getElementById("tag"),


    v_ich: document.getElementById('v-ich'),
    v_wir: document.getElementById('v-wir'),
    v_du_m: document.getElementById('v-du-m'),
    v_du_f:document.getElementById('v-du-f'),
    v_ihr:document.getElementById('v-ihr'),
    v_er:document.getElementById('v-er'),
    v_sie_f:document.getElementById('v-sie-f'),
    v_sie_pl:document.getElementById('v-sie-pl'),

    g_ich: document.getElementById('g-ich'),
    g_wir: document.getElementById('g-wir'),
    g_du_m: document.getElementById('g-du-m'),
    g_du_f:document.getElementById('g-du-f'),
    g_ihr:document.getElementById('g-ihr'),
    g_er:document.getElementById('g-er'),
    g_sie_f:document.getElementById('g-sie-f'),
    g_sie_pl:document.getElementById('g-sie-pl'),

    imp_m:document.getElementById('imperativ-m'),
    imp_f:document.getElementById('imperativ-f'),
    imp_pl:document.getElementById('imperativ-pl'),
    ap_m:document.getElementById('ap-m'),
    ap_f:document.getElementById('ap-f'),
    ap_pl:document.getElementById('ap-pl'),
    passive:document.getElementById('passive'),

  


  
    


    toggleMode(mode) {
        this.mode = mode;
        
    },

    setErrorText(text){
        document.getElementById('error-message-verb').innerHTML=text;
    },


    updateUI() {
        if (this.mode ==="Nomen") {
            // Logik für den Noun-Modus, UI-Aktualisierung
            document.getElementById('noun-div').classList.remove('hidden');
            const outerDiv = document.getElementById('verb-div');
            outerDiv.classList.add('hidden');
             // Finde alle Unterlemente von #verb-div (Labels und Inputs)
            const verbDivChildren = document.querySelectorAll('#verb-div *');
            // Füge die Klasse "hidden" auch zu den Unterlementen hinzu
            verbDivChildren.forEach((child) => {
                child.classList.add('hidden');
            });
        } else if(this.mode==="Verb"){
            // Logik für den Verb-Modus, UI-Aktualisierung
            const outerDiv = document.getElementById('verb-div');
            outerDiv.classList.remove('hidden');
             // Finde alle Unterlemente von #verb-div (Labels und Inputs)
             const verbDivChildren = document.querySelectorAll('#verb-div *');
             // Füge die Klasse "hidden" auch zu den Unterlementen hinzu
             verbDivChildren.forEach((child) => {
                 child.classList.remove('hidden');
                });
            document.getElementById('noun-div').classList.add('hidden');
        }
    },

    setData(data){
        this.v_ich.value=data.verg_1;
        this.v_wir.value=data.verg_2;
        this.v_du_m.value=data.verg_3;
        this.v_du_f.value=data.verg_4
        this.v_ihr.value=data.verg_5;
        this.v_er.value=data.verg_6;
        this.v_sie_f.value=data.verg_7;
        this.v_sie_pl.value=data.verg_8;

        this.g_ich.value=data.geg_1;
        this.g_wir.value=data.geg_2;
        this.g_du_m.value=data.geg_3;
        this.g_du_f.value=data.geg_4;
        this.g_ihr.value=data.geg_5;
        this.g_er.value=data.geg_6;
        this.g_sie_f.value=data.geg_7;
        this.g_sie_pl.value=data.geg_8;

        this.imp_m.value=data.imp_1;
        this.imp_f.value=data.imp_2;
        this.imp_pl.value=data.imp_3;

        this.ap_m.value=data.ap_1;
        this.ap_f.value=data.ap_2;
        this.ap_pl.value=data.ap_3;
        this.passive.value=data.pass;
    },

    clearData(){
        this.v_ich.value='';
        this.v_wir.value='';
        this.v_du_m.value='';
        this.v_du_f.value='';
        this.v_ihr.value='';
        this.v_er.value='';
        this.v_sie_f.value='';
        this.v_sie_pl.value='';

        this.g_ich.value='';
        this.g_wir.value='';
        this.g_du_m.value='';
        this.g_du_f.value=''
        this.g_ihr.value='';
        this.g_er.value='';
        this.g_sie_f.value='';
        this.g_sie_pl.value='';

        this.imp_m.value='';
        this.imp_f.value='';
        this.imp_pl.value='';

        this.ap_m.value='';
        this.ap_f.value='';
        this.ap_pl.value='';
        this.passive.value='';

        this.translationField.value="";
        this.vergangenheitField.value="";
        this.tagField.value="";

        this.setErrorText("");
    },

    getData(){
       // verben csv Wort,Vergangenheit,Gegenwart,Tag,Wortart,D-Vergangenheit,D-Gegenwart,Imperativ,AP,Passive
       const d_verg= this.v_ich.value.trim()+","+
       this.v_wir.value.trim()+","+this.v_du_m.value.trim()
       +","+this.v_du_f.value.trim()+","+this.v_ihr.value.trim()+","+
       this.v_er.value.trim()+","+
       this.v_sie_f.value.trim()+","
       +this.v_sie_pl.value.trim();
      
       const d_geg = this.g_ich.value.trim()+","+this.g_wir.value.trim()+","+this.g_du_m.value.trim()+","+this.g_du_f.value.trim()+","+this.g_ihr.value.trim()+","+this.g_er.value.trim()+","+this.g_sie_f.value.trim()+","+this.g_sie_pl.value.trim();
       
        const imp = this.imp_m.value.trim()+","+this.imp_f.value.trim()+","+this.imp_pl.value.trim();
        const ap = this.ap_m.value.trim()+","+this.ap_f.value.trim()+","+this.ap_pl.value.trim();
        const entry = {
            "Wort":this.translationField.value.trim(),
            "Übersetzung": this.vergangenheitField.value.trim(),
            "Spalte 3":this.g_er.value.trim(),
            "Tag":this.tagField.value.trim(),
            "Wortart":this.mode,
            "Spalte 6":d_verg,
            "Spalte 7":d_geg,
            "Spalte 8":imp,
            "Spalte 9":ap,
            "Spalte 10":this.passive.value.trim(),
        }
        return entry

    }
}

export default viewModel;