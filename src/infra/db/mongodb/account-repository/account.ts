import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-acctount'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getColletion('accounts')
    const result = await accountCollection.insertOne(accountData)
    const mongoAccount = await accountCollection.findOne({ _id: result.insertedId })
    const account = {
      id: mongoAccount._id.toString(),
      name: mongoAccount.name,
      email: mongoAccount.email,
      password: mongoAccount.password
    }
    return await new Promise(resolve => resolve(account))
  }
}
