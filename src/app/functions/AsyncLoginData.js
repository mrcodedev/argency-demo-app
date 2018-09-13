
    export async function saveData(){
        try{
            let saveTheData = JSON.stringify(this.state);
            await AsyncStorage.setItem('dataLogin', saveTheData);
        }
        catch(error) {
            console.log(`Error Async: ${error}`);
        }
    }

    export async function loadData() {
        try {
            let data = await AsyncStorage.getItem('dataLogin');
            
            if(data !== null) {
                this.setState({
                    dataLogin: JSON.parse(data),
                })
            }else{
                console.log('ERROR EN RECOGER DATOS ASYNC');
            }
        } catch(error) {
            console.log(`Error devolver Async: ${error}`);
        }
    }
