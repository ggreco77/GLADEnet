import React, { Component } from "react";

class NoteWithCloseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isHovered: false,
    };
  }

  toggleNote = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isOpen, isHovered } = this.state;

    const noteStyle = {
      backgroundColor: isOpen
        ? isHovered
          ? "#F44336"
          : "rgba(244, 67, 54, 0.9)"
        : "rgba(244, 67, 54, 0.9)",
      color: "white",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginBottom: "20px",
      position: "relative",
      transition: "background-color 0.3s ease",
    };

    const buttonStyle = {
      position: "absolute",
      top: "5px",
      right: "10px",
      background: "none",
      border: "none",
      color: isHovered ? "white" : "black",
      cursor: "pointer",
      fontSize: "18px",
      transition: "color 0.3s ease",
    };

    return (
      <div>
        {isOpen ? (
          <div
            style={noteStyle}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <button style={buttonStyle} onClick={this.toggleNote}>
              X
            </button>
            <div style={{ marginRight: "30px" }}>
              GLADEnet interactively displays the top 1000
              galaxies with the highest absolute magnitude values in band B and
              probability density using two independent sliders. 
              The entire catalog can be downloaded when the completeness coefficient exceeds 𝒞 &#62; 0.5.
              The choice of this value is arbitrary and based on the resources available 
              at the moment in the future can be changed.
              
              Only confident and significant events are considered.
            </div>
          </div>
        ) : (
          <button
            style={{
              backgroundColor: isHovered ? "#333" : "rgba(244, 67, 54, 0.9)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              margin: "10px",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease",
            }}
            onClick={this.toggleNote}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            +
          </button>
        )}
      </div>
    );
  }
}

export default NoteWithCloseButton;
