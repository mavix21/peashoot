import { MonthlyTemperatureRange as IMonthlyTemperatureRange } from '@peashoot/types'
import { Column, Entity, ManyToOne } from 'typeorm'
import { Temperature } from '../values/temperature'
import { Location } from './location'
import { PeashootEntity } from './peashoot-entity'

@Entity()
export class MonthlyTemperatureRange
	extends PeashootEntity<'mtr'>
	implements IMonthlyTemperatureRange
{
	constructor() {
		super('mtr')
	}

	@Column()
	month!: number

	@ManyToOne(() => Location, (location) => location.monthlyTemperatureRanges)
	location!: Location

	@Column(() => Temperature)
	min!: Temperature

	@Column(() => Temperature)
	max!: Temperature
}
