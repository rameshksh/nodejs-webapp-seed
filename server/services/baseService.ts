
export interface IBaseService<TEntity>
{
    get(query : Object, callback: (errr: Error, item: Array<TEntity>) => any);   
}

export class BaseService<TEntity> implements IBaseService<TEntity>
{
    
    public constructor()
    {
       
    }   

    public get(query: Object, callback: (errr: Error, item: Array<TEntity>) => any)
    {
        
    }
}


  