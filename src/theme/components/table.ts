export const table = `
table {
  --table-row-background-color: transparent;
  --table-row-box-shadow: inset 0 -1px var(--gray-a5);
  --table-border-radius: var(--radius-3);
  --table-cell-padding: var(--space-1);
  --table-cell-min-height: calc(12px * var(--scaling));

  width: 100%;
  text-align: left;
  vertical-align: top;
  border-collapse: collapse;
  border-radius: calc(var(--table-border-radius) - 1px);
  border-spacing: 0;
  box-sizing: border-box;

  /* Makes "height: 100%" work on content inside cells */
  height: 0;
}

table tbody {
  vertical-align: inherit;
}

table tr {
  vertical-align: inherit;
  color: var(--gray-12);
}

table td, table th {
  border: 1px solid var(--gray-a4);
  background-color: var(--table-row-background-color);
  border-radius: calc(var(--table-border-radius) - 1px);
  box-sizing: border-box;
  vertical-align: inherit;
  padding: var(--table-cell-padding);
  /* Works as min-height */
  height: var(--table-cell-min-height);
}
`;
