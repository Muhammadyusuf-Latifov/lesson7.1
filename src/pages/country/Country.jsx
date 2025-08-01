import React, { Component } from "react";
import { data } from "react-router-dom";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      population: "",
      area: "",
      data: [],
      updateId: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateId, data, name, population, area, capital } = this.state;
    if (updateId) {
      const updated = data.map((item) =>
        item.id == updateId
          ? { id: updateId, name, capital, population, area }
          : item
        
      );
      this.setState({
        data: updated,
        name: "",
        population: "",
        area: "",
        capital: "",
      });
    } else {
      const country = {
        id: Date.now(),
        name: this.state.name,
        capital: this.state.capital,
        population: this.state.population,
        area: this.state.area,
      };
      this.setState({
        data: [...data, country],
        name: "",
        population: "",
        capital: "",
        area: "",
      });
    }
  };
  handleDelete = (id) => {
    this.setState({ data: this.state.data.filter((item) => item.id !== id) });
  };
  handleUpdate = (item) => {
    this.setState({
      updateId: item.id,
      name: item.name,
      capital: item.capital,
      population: item.population,
      area: item.area,
    });
  };

  render() {
    const { name, data, population, area, capital } = this.state;
    return (
      <section>
        <div className="container mx-auto mt-[50px] ">
          <form
            onSubmit={this.handleSubmit}
            action=""
            className="bg-[#3a98e4] max-w-[650px] p-[20px] mx-auto rounded-[5px] shadow-lg"
          >
            <h2 className="text-center text-[#fff] text-[24px] mb-[30px]">
              Country information
            </h2>
            <div className="flex items-center justify-between gap-[8px]">
              <input
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
                className="w-[50%]"
                required
                placeholder="Enter the country name"
                type="text"
                name=""
                id=""
              />
              <input
                required
                value={capital}
                onChange={(e) => this.setState({ capital: e.target.value })}
                className="w-[50%]"
                placeholder="Enter the capital "
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center justify-between gap-[8px]">
              <input
                required
                value={population}
                onChange={(e) => this.setState({ population: e.target.value })}
                className="w-[50%]"
                placeholder="Enter the population"
                type="number"
                name=""
                id=""
              />
              <input
                required
                value={area}
                onChange={(e) => this.setState({ area: e.target.value })}
                className="w-[50%]"
                placeholder="Enter the area"
                type="number"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center justify-center mt-[26px]">
              <button className="py-[8px] px-[30px] border text-[#fff]">
                Submit
              </button>
            </div>
          </form>
        </div>
        <h2 className="text-center text-[34px] mb-[30px] mt-[60px]">
          Countries
        </h2>
        <div className="container mx-auto grid grid-cols-4 gap-[16px]">
          {data?.map((item) => (
            <div
              className="border border-[#d6d4d4] shadow-md p-[20px]"
              key={item.id}
            >
              <div className="h-[70px] flex items-center justify-center">
                <p className="text-[40px] ">...</p>
              </div>
              <h3 className="text-[20px] font-medium text-[#026ed9]">
                {" "}
                {item.name}
              </h3>
              <p className="text-[17px] text-[#9c1601]">{item.capital}</p>
              <p> population: {item.population}</p>
              <p className="text-[green]"> area: {item.area}</p>

              <div className="flex items-center justify-between gap-[10px] mt-[20px]">
                <button
                  onClick={() => this.handleDelete(item.id)}
                  className="block w-[50%] border py-[5px] rounded-[6px] bg-[#ea2f55] text-[white]"
                >
                  Delete
                </button>
                <button
                  onClick={() => this.handleUpdate(item)}
                  className="block w-[50%] border py-[5px] rounded-[6px] bg-[#58aacf] text-[#fff]"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
