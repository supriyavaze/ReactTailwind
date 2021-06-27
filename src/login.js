import React from 'react';
class Login extends React.Component {
    render() {
        return <DisplayLoginForm name={this.props.name} age="10"></DisplayLoginForm>;
    }
}

function DisplayLoginForm(props) {
    return <div className=" flex h-screen justify-center items-center ">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                Username
  </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                Password
  </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
            <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
            <button className="bg-blue-100 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
  </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                Forgot Password?
  </a>
        </div>
    </div>
</div>;
}

export default Login;