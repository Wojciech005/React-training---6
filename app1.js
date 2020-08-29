const PositiveNews = () => <p>You can buy this car !</p>
const NegativeNews = () => <p>Sorry mate...You can't buy this car !</p>

class App extends React.Component {

    state = {
        isConfirmed:  false,
    }

    handleCheckWallet = () => {
        this.setState ({
            isConfirmed: !this.state.isConfirmed
        })
    }

    checkYourMoney = () => {
        if(this.state.isConfirmed) {
            return <PositiveNews />
            } else {
                return < NegativeNews />
            }
        }
    

    render() {
        return (
            <React.Fragment>
                <h1>Can I buy BMW for 10000$ ?</h1>
                <input type="checkbox" id="budget" onChange = {this.handleCheckWallet}  checked = {this.state.isConfirmed}/>
                <label htmlFor="budget">I have got 12000$</label>
                {this.checkYourMoney()}
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))