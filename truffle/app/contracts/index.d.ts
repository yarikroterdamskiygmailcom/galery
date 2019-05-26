/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface ArkSellContract extends Truffle.Contract<ArkSellInstance> {
  "new"(
    _nftAddress: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<ArkSellInstance>;
}

export interface ArtworkGalleryContract
  extends Truffle.Contract<ArtworkGalleryInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ArtworkGalleryInstance>;
}

export interface ERC165Contract extends Truffle.Contract<ERC165Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC165Instance>;
}

export interface ERC721Contract extends Truffle.Contract<ERC721Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC721Instance>;
}

export interface ERC721EnumerableContract
  extends Truffle.Contract<ERC721EnumerableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC721EnumerableInstance>;
}

export interface ERC721MetadataContract
  extends Truffle.Contract<ERC721MetadataInstance> {
  "new"(
    name: string,
    symbol: string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC721MetadataInstance>;
}

export interface ERC721MetadataMintableContract
  extends Truffle.Contract<ERC721MetadataMintableInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<ERC721MetadataMintableInstance>;
}

export interface ERC721MintableContract
  extends Truffle.Contract<ERC721MintableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC721MintableInstance>;
}

export interface IERC165Contract extends Truffle.Contract<IERC165Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC165Instance>;
}

export interface IERC721Contract extends Truffle.Contract<IERC721Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC721Instance>;
}

export interface IERC721EnumerableContract
  extends Truffle.Contract<IERC721EnumerableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC721EnumerableInstance>;
}

export interface IERC721MetadataContract
  extends Truffle.Contract<IERC721MetadataInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC721MetadataInstance>;
}

export interface IERC721ReceiverContract
  extends Truffle.Contract<IERC721ReceiverInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC721ReceiverInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface MinterRoleContract
  extends Truffle.Contract<MinterRoleInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MinterRoleInstance>;
}

export interface OwnableContract extends Truffle.Contract<OwnableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OwnableInstance>;
}

export interface ArkSellInstance extends Truffle.ContractInstance {
  tokenIdToPrice(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[string, BigNumber]>;

  setPrice(
    _tokenId: number | BigNumber | string,
    _price: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  purchaseToken(
    _tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  cancel(
    _tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  nonFungibleContract(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface ArtworkGalleryInstance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  tokenOfOwnerByIndex(
    owner: string | BigNumber,
    index: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokenByIndex(
    index: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenURI(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mint(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mintWithTokenURI(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    tokenURI: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceOwnership(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    to: string | BigNumber,
    approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setContractPrice(
    newContractPrice: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  cancelContractSale(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  purchaseContract(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
  isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;
  getContractPrice(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC165Instance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;
}

export interface ERC721Instance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    to: string | BigNumber,
    approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface ERC721EnumerableInstance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenOfOwnerByIndex(
    owner: string | BigNumber,
    index: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokenByIndex(
    index: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    to: string | BigNumber,
    approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC721MetadataInstance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenURI(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    to: string | BigNumber,
    approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface ERC721MetadataMintableInstance
  extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenURI(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    to: string | BigNumber,
    approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mintWithTokenURI(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    tokenURI: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface ERC721MintableInstance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    to: string | BigNumber,
    approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mint(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface IERC165Instance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;
}

export interface IERC721Instance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    operator: string | BigNumber,
    _approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface IERC721EnumerableInstance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenOfOwnerByIndex(
    owner: string | BigNumber,
    index: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokenByIndex(
    index: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    operator: string | BigNumber,
    _approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface IERC721MetadataInstance extends Truffle.ContractInstance {
  supportsInterface(
    interfaceId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getApproved(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ownerOf(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isApprovedForAll(
    owner: string | BigNumber,
    operator: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenURI(
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  approve(
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  safeTransferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    tokenId: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setApprovalForAll(
    operator: string | BigNumber,
    _approved: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface IERC721ReceiverInstance extends Truffle.ContractInstance {
  onERC721Received(
    operator: string | BigNumber,
    from: string | BigNumber,
    tokenId: number | BigNumber | string,
    data: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  setCompleted(
    completed: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  upgrade(
    new_address: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface MinterRoleInstance extends Truffle.ContractInstance {
  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface OwnableInstance extends Truffle.ContractInstance {
  renounceOwnership(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
  isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
}
