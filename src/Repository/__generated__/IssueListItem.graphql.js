/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IssueListItem$ref: FragmentReference;
declare export opaque type IssueListItem$fragmentType: IssueListItem$ref;
export type IssueListItem = {|
  +number: number,
  +title: string,
  +url: any,
  +$refType: IssueListItem$ref,
|};
export type IssueListItem$data = IssueListItem;
export type IssueListItem$key = {
  +$data?: IssueListItem$data,
  +$fragmentRefs: IssueListItem$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '8a167cc7e0fc0b74b1a1af30ea9b2149';

module.exports = node;
