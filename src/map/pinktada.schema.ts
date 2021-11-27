import * as mongoose from 'mongoose'
export const ItemsSchema = new mongoose.Schema({any:mongoose.Schema.Types.Mixed})
export interface items extends mongoose.Document{}