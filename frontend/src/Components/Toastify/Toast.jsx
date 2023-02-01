import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const StyledContainer = styled(ToastContainer)`

  &&&.Toastify__toast-container {
    height: 30px;
    text-align: center;
  }
  .Toastify__toast {
    height: 50px;
    text-align: center;
  }
  .Toastify__toast-body {
    height: 30px;
    text-align: center;
  }
  .Toastify__progress-bar {
    height: 5px;
  }
`;

export { StyledContainer };
