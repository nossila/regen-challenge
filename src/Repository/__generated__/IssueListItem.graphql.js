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
  +title: string,
  +closed: boolean,
  +resourcePath: any,
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "closed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourcePath",
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0c00dfc2c59b68cf6bbfe2813bcfa70f';

module.exports = node;
