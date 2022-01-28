import { AddAccountModel } from '../../domain/usecases/add-acctount'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
