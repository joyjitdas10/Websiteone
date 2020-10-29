import React from 'react';
import{Table} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class TableDynamic extends React.Component{
    constructor(){
        super();
        this.state = {datas:[],
            userId:'',
            id:'',
            title:''
      
          };
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()
        .then(posts=>this.setState({datas:posts}))
        )
      }
    render(){
        
        return(
            <div className='table_list'> 
                                          
                            <Table striped bordered hover>

                                 <thead>
                                    <tr>
                                      <th>UserID</th>
                                      <th>ID</th>
                                      <th>Title</th>
                                      <th>Body</th>
                                    </tr>
                                  </thead>
                                  {
                                  this.state.datas.map(datas => (                        
                                  <tbody key = {datas.id}>
                                      <tr >
                                        <td>{datas.userId}</td>
                                        <td> {datas.id}</td>
                                        <td>{datas.title}</td>
                                        <td>{datas.body}</td>
                                      </tr>
                                 </tbody>
                     
                                    ))
                                   } 
                           </Table>
                         
                    
              </div>      
  

        );
    }

}

export default TableDynamic;