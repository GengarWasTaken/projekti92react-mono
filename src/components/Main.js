import React from 'react'
import Item from "./Item"
import Data from "../database/Data"
import SortAZButton from "./SortAZButton"
import Search from "./Search"

class Main extends React.Component {

    constructor() {

        super()
        this.state = {

            data: Data,
            sortedAZ: false,

        }

        this.sortAZ = this.sortAZ.bind(this)
        this.search = this.search.bind(this)

    }

    sortAZ(list) {

        if (this.state.sortedAZ === false) {

        this.setState(prevState => {

            const dataListAZ = prevState.data.sort(function (a, b) {

                let nameA = a.name.toUpperCase();
    
                let nameB = b.name.toUpperCase();
    
                if (nameA < nameB) {
    
                    return -1;
                }
                if (nameA > nameB) {
    
                    return 1;
                }
    
                return 0;
    
            });

            return {

                data: dataListAZ,
                sortedAZ: true

            }

        })

    } else {

        this.setState(prevState => {

            const dataListAZ = prevState.data.sort(function (a, b) {

                let nameA = a.name.toUpperCase();
    
                let nameB = b.name.toUpperCase();
    
                if (nameA < nameB) {
    
                    return 1;
                }
                if (nameA > nameB) {
    
                    return -1;
                }
    
                return 0;

            })

            return {

            data: dataListAZ,
            sortedAZ: false

            }

        })

    }

    }

    search(term) {

        this.setState(prevState => {

            const filteredList = prevState.data.filter(item => {

                return item.name.toLowerCase().includes(term.toLowerCase())

            })

            return {

                data: filteredList,

            }

        })

    }

    render() {

        const dataList = this.state.data.map((item) => {

        return <Item name={item.name} model={item.model} key={item.id} />

        })

        return(

            <main className="main">
                {dataList}
                <SortAZButton onClick={this.sortAZ}/>
                <Search onKeyDown={this.search}/>
            </main>

        )

    }

}

export default Main
