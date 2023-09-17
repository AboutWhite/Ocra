const model = {
    nounData: [],
    verbData: [],
   

    setNounData(vocabulary){
        for(let i = 0; i< vocabulary.length; i++){
            this.nounData[i]=vocabulary[i];
        } 

        this.nounData.forEach(element => {
            //console.log(element);
            
        });
    },
    setVerbData(vocabulary){
        for(let i = 0; i< vocabulary.length; i++){
            this.verbData[i]=vocabulary[i];
        } 

       
      console.log(this.verbData);
        
    },

    addNoun(entry){
        this.nounData.push(entry);
       
    },

    addVerb(entry){
        this.verbData.push(entry);
        console.log(this.verbData);
    },



}

export default model;