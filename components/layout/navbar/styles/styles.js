import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.tan};
  padding: 1rem 0.5rem;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
  .navbar-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-family: ${({ theme }) => theme.fonts[2]};
      font-size: ${({ theme }) => theme.fontSizes.md};
    }

    .navbar-nav {
      display: flex;
      align-items: center;
      gap: 2rem;
      .nav-cart {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .bag-count {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          padding: 10px;
          background: ${({ theme }) => theme.colors.darkPurple};
          color: ${({ theme }) => theme.colors.tan};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default NavbarContainer;
