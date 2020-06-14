import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-logo',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class PolaronLogo {
  render() {
    return (
      <Host>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <path
            class="cls-1"
            d="M229.1,92.67a21.9,21.9,0,1,0-21.9-21.9A21.89,21.89,0,0,0,229.1,92.67Z"
          />
          <path
            class="cls-1"
            d="M287.33,50.57A25.29,25.29,0,1,0,262,25.29,25.28,25.28,0,0,0,287.33,50.57Z"
          />
          <path
            class="cls-1"
            d="M405.21,424.77,305.87,260.71V169.07h2.42a26,26,0,0,0,0-52.06H192.5a26,26,0,0,0,0,52.06h2.41v91.64L95.58,424.77c-17.41,35,8,76,47.07,76H358.14C397.19,500.79,422.61,459.73,405.21,424.77Zm-85,26.6H180.42A19.39,19.39,0,0,1,164.47,421L236,317.51a19.39,19.39,0,0,1,32.13.34L336.35,421.3A19.39,19.39,0,0,1,320.17,451.37Z"
          />
        </svg>
        <h3>Polaron</h3>
      </Host>
    );
  }
}
