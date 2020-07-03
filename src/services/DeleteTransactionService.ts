import AppError from '../errors/AppError';
import { getRepository, getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const searchedTransaction = await transactionsRepository.findOne(id);

    if (!searchedTransaction)
      throw new AppError('Transaction does not exist');

    await transactionsRepository.remove(searchedTransaction);
  }
}

export default DeleteTransactionService;
