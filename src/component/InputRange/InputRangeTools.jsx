import InputRange from 'react-input-range';
import {Component} from "react"
import "react-input-range/lib/css/index.css"
import "./main.css"


class InputRangeTools extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 1000000, max: 2000000 },
        };
      }
     
      render() {
        return (
          <InputRange
          formatLabel={value => `${value}so'm`}
            maxValue={3000000}
            minValue={0}
            value={this.state.value}
            onChange={value => this.setState({ value })} />
        );
      }
    }

export default InputRangeTools;
