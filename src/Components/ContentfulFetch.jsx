import { createClient } from "contentful";

const client = createClient({
    space: 'xbarv21go206',
    accessToken: 'D8MNKk0S2_S_vrTXVLmuSpdUu2VpL6tjLgPUD8b2FRE',
    host: 'cdn.contentful.com',
})

const fetchContenfulData = async(content_type) => {
    try{
        const data = await client.getEntries({
            content_type: content_type,
            select: "fields",
        })
        var processedData = null;
        switch(content_type){
            case 'projects':
                processedData = data.items?.map((item,index)=>{
                    //So we map and get values but for some reason content in content is array so if any problem look here
                    const description = item.fields.description.content?.map((item) => {
                        return {
                            value: item.content[0].value
                        }    
                    });
                    console.log(index);
                    const image = item.fields.image?.map((item) =>{
                        return{
                            image: item.fields
                        }
                    });
                    return{
                        ...item.fields,
                        description,
                        image
                    }
                })
                return processedData;
            default:
                return null;    
        }
    } 
    catch(error){
        console.error(`Error fetching data from ${content_type} error msg: ${error}`);
        return null;
    }
}

export default fetchContenfulData;

