'use server'

export async function doAdmin({ password }) {
    
    //remplacer par une viariable d'environnement
    const mdp = '1234';

    const formData = new FormData();
    formData.append('password', password);

    // Vérifiez le contenu de FormData
    const data = password;
    
    console.log(data === mdp);
    if(data === mdp){
        return true;
    }else {
        return false;
    }
    

}