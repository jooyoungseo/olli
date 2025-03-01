// Adapted from: https://w3c.github.io/aria-practices/examples/treeview/treeview-1/treeview-1b.html

import { AccessibilityTree, AccessibilityTreeNode } from "../../Structure/Types";
import { fmtValue } from "../../utils";
import "./TreeStyle.css";

/**
 *
 * @param node A {@link AccessibilityTreeNode} to generate a navigable tree view from
 * @returns An {@link HTMLElement} ARIA TreeView of the navigable tree view for a visualization
 */
 export function renderTree(tree: AccessibilityTree): HTMLElement {
  const namespace = (Math.random() + 1).toString(36).substring(7);

  const node = tree.root;

  const root = document.createElement('ul');
  const labelId = `${namespace}-${node.type}-label`;

  root.setAttribute('role', 'tree');
  root.setAttribute('aria-labelledby', labelId);

  // const childContainer = document.createElement('ul');
  // childContainer.setAttribute('role', 'group');

  // childContainer.appendChild(_renderTree(node, namespace, 1, 1, 1));

  // root.appendChild(childContainer);

  // childContainer.querySelector('span')?.setAttribute('id', labelId);

  root.appendChild(_renderTree(node, namespace, 1, 1, 1));
  root.querySelector('span')?.setAttribute('id', labelId);

  return root;

  function _renderTree(node: AccessibilityTreeNode, namespace: string, level: number, posinset: number, setsize: number): HTMLElement {
    const item = document.createElement('li');
    item.setAttribute('role', 'treeitem');
    item.setAttribute('aria-level', String(level));
    item.setAttribute('aria-setsize', String(setsize));
    item.setAttribute('aria-posinset', String(posinset));
    item.setAttribute('aria-expanded', 'false');
    item.setAttribute('data-nodetype', node.type);
    if (node.gridIndex) {
      item.setAttribute('data-i', String(node.gridIndex.i));
      item.setAttribute('data-j', String(node.gridIndex.j));
    }

    const label = document.createElement('span');
    label.textContent = node.description;
    item.appendChild(label);

    if (node.children.length) {

      const dataChildren = node.children.filter(n => n.type === 'data');
      const treeChildren = node.children.filter(n => n.type !== 'data');

      const childContainer = document.createElement('ul');
      childContainer.setAttribute('role', 'group');

      if (dataChildren.length) {
        childContainer.appendChild(createDataTable(dataChildren, level + 1));
      }
      else {
        treeChildren.forEach((n, index, array) => {
          childContainer.appendChild(_renderTree(n, namespace, level + 1, index + 1, array.length));
        })
      }
      item.appendChild(childContainer);

    }

    return item;
  }

  function createDataTable(dataNodes: AccessibilityTreeNode[], level: number) {
    const table = document.createElement("table");
    table.setAttribute('aria-label', `Table with ${dataNodes.length} rows`);
    table.setAttribute('aria-level', String(level));
    table.setAttribute('aria-posinset', '1');
    table.setAttribute('aria-setsize', '1');

    const thead = document.createElement("thead");
    const theadtr = document.createElement("tr");
    theadtr.setAttribute('aria-label', `${dataNodes[0].tableKeys?.join(', ')}`);

    dataNodes[0].tableKeys?.forEach((key: string) => {
      const th = document.createElement("th");
      th.setAttribute('scope', 'col');
      th.innerText = key
      theadtr.appendChild(th);
    });

    thead.appendChild(theadtr);
    table.appendChild(thead);

    //

    const tableBody = document.createElement("tbody");

    dataNodes.forEach((node) => {
      const dataRow = document.createElement("tr")
      dataRow.setAttribute('aria-label', `${node.tableKeys?.map(key => `${key}: ${node.selected[0][key]}`).join(', ')}`);
      node.tableKeys?.forEach((key: string) => {
        const td = document.createElement("td")
        const value = fmtValue(node.selected[0][key]);
        td.innerText = value;
        dataRow.appendChild(td);
      })
      tableBody.appendChild(dataRow);
    });

    table.appendChild(tableBody);

    // const item = document.createElement('li');
    // item.setAttribute('role', 'treeitem');
    // item.setAttribute('aria-level', String(level));
    // item.setAttribute('aria-setsize', '1');
    // item.setAttribute('aria-posinset', '1');
    // item.setAttribute('aria-expanded', 'false');

    // item.appendChild(table);

    // return item;
    return table;
  }

}
