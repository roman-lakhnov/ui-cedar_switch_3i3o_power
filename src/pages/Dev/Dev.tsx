import Header from '@/components/Header/Header'
import type { DataType, UserType } from '@/types'
import {
	getData,
	handleCreateUser,
	handleDeleteUser,
	handleSubmit
} from '@/utils/utils'
import { useEffect, useState } from 'react'
import styles from './Dev.module.scss'
import CustomInput from '@/components/CustomInput/CustomInput'

const Dev = () => {
	const [data, setData] = useState<DataType>({} as DataType)
	const [form, setForm] = useState<DataType>({} as DataType)
	const [createUser, setCreateUser] = useState<UserType>({} as UserType)
	const [deleteUser, setDeleteUser] = useState<UserType>({} as UserType)

	useEffect(() => {
		getData(setData)
	}, [])

	useEffect(() => {
		setForm({ ...data })
	}, [data])

	return (
		<div className='container'>
			<Header />
			<main className={styles.devContent}>
				<section className='card'>
					<h2>Safe State</h2>
					<div>
						{' '}
						<h3>get data</h3>
						{data.safeState ? (
							<div>
								<p>Enabled: {data.safeState.enabled ? 'Yes' : 'No'}</p>
								<p>Relay 1: {data.safeState.relay1 ? 'On' : 'Off'}</p>
								<p>Relay 2: {data.safeState.relay2 ? 'On' : 'Off'}</p>
								<p>Relay 3: {data.safeState.relay3 ? 'On' : 'Off'}</p>
							</div>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div>
						{' '}
						<h3>post data</h3>
						{form.safeState ? (
							<div>
								<form>
									<label>
										Enabled:
										<input
											type='checkbox'
											checked={form.safeState.enabled}
											onChange={e =>
												setForm({
													...form,
													safeState: {
														...form.safeState,
														enabled: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Relay 1:
										<input
											type='checkbox'
											checked={form.safeState.relay1}
											onChange={e =>
												setForm({
													...form,
													safeState: {
														...form.safeState,
														relay1: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Relay 2:
										<input
											type='checkbox'
											checked={form.safeState.relay2}
											onChange={e =>
												setForm({
													...form,
													safeState: {
														...form.safeState,
														relay2: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Relay 3:
										<input
											type='checkbox'
											checked={form.safeState.relay3}
											onChange={e =>
												setForm({
													...form,
													safeState: {
														...form.safeState,
														relay3: e.target.checked
													}
												})
											}
										/>
									</label>
								</form>
								<button
									type='button'
									onClick={() => handleSubmit('safeState', setData, form)}
								>
									Submit
								</button>
							</div>
						) : (
							<p>Loading form...</p>
						)}
					</div>
				</section>
				<section className='card'>
					{' '}
					<h2>Relay State</h2>
					<div>
						<h3>get data</h3>
						{data.relayState ? (
							<div>
								<p>Relay 1: {data.relayState.relay1 ? 'On' : 'Off'}</p>
								<p>Relay 2: {data.relayState.relay2 ? 'On' : 'Off'}</p>
								<p>Relay 3: {data.relayState.relay3 ? 'On' : 'Off'}</p>
								<p>Relay 4: {data.relayState.relay4 ? 'On' : 'Off'}</p>
							</div>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div>
						<h3>post data</h3>
						{form.relayState ? (
							<div>
								{' '}
								<form>
									<label>
										Relay 1:
										<input
											type='checkbox'
											checked={form.relayState.relay1}
											onChange={e =>
												setForm({
													...form,
													relayState: {
														...form.relayState,
														relay1: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Relay 2:
										<input
											type='checkbox'
											checked={form.relayState.relay2}
											onChange={e =>
												setForm({
													...form,
													relayState: {
														...form.relayState,
														relay2: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Relay 3:
										<input
											type='checkbox'
											checked={form.relayState.relay3}
											onChange={e =>
												setForm({
													...form,
													relayState: {
														...form.relayState,
														relay3: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Relay 4:
										<input
											type='checkbox'
											checked={form.relayState.relay4}
											onChange={e =>
												setForm({
													...form,
													relayState: {
														...form.relayState,
														relay4: e.target.checked
													}
												})
											}
										/>
									</label>
								</form>
								<button
									type='button'
									onClick={() => handleSubmit('relayState', setData, form)}
								>
									Submit
								</button>
							</div>
						) : (
							<p>Loading form...</p>
						)}
					</div>
				</section>
				<section className='card'>
					{' '}
					<h2>MQTT Settings</h2>
					<div>
						{' '}
						<h3>get data</h3>
						{data.mqttSettings ? (
							<div>
								<p>enabled:{data.mqttSettings.enabled ? 'Yes' : 'No'}</p>
								<p>host:{data.mqttSettings.host}</p>
								<p>port:{data.mqttSettings.port}</p>
								<p>user:{data.mqttSettings.user}</p>
								<p>pass:{data.mqttSettings.pass}</p>
							</div>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div>
						<h3>post data</h3>
						{form.mqttSettings ? (
							<div>
								<form>
									<label>
										Enabled:
										<input
											type='checkbox'
											checked={form.mqttSettings.enabled}
											onChange={e =>
												setForm({
													...form,
													mqttSettings: {
														...form.mqttSettings,
														enabled: e.target.checked
													}
												})
											}
										/>
									</label>
									<label>
										Host:
										<CustomInput
											id='mqtt-host'
											name='mqtt-host'
											type='text'
											value={form.mqttSettings.host}
											onChange={e =>
												setForm({
													...form,
													mqttSettings: {
														...form.mqttSettings,
														host: e.target.value
													}
												})
											}
										/>
									</label>
									<label>
										Port:
										<CustomInput
											id='mqtt-port'
											name='mqtt-port'
											type='number'
											value={form.mqttSettings.port}
											onChange={e =>
												setForm({
													...form,
													mqttSettings: {
														...form.mqttSettings,
														port: Number(e.target.value)
													}
												})
											}
										/>
									</label>
									<label>
										User:
										<CustomInput
											id='mqtt-user'
											name='mqtt-user'
											type='text'
											value={form.mqttSettings.user}
											onChange={e =>
												setForm({
													...form,
													mqttSettings: {
														...form.mqttSettings,
														user: e.target.value
													}
												})
											}
										/>
									</label>
									<label>
										Pass:
										<CustomInput
											id='mqtt-pass'
											name='mqtt-pass'
											type='password'
											value={form.mqttSettings.pass}
											onChange={e =>
												setForm({
													...form,
													mqttSettings: {
														...form.mqttSettings,
														pass: e.target.value
													}
												})
											}
										/>
									</label>
								</form>
								<button
									type='button'
									onClick={() => handleSubmit('mqttSettings', setData, form)}
								>
									Submit
								</button>
							</div>
						) : (
							<p>Loading form...</p>
						)}
					</div>
				</section>
				<section className='card'>
					<h2>System reboot required GET</h2>
					<div>
						{' '}
						<h3>get data</h3>
						{data?.systemRebootRequired ? (
							<div>
								<p>
									Reboot Required:{' '}
									{data.systemRebootRequired.reboot_required ? 'Yes' : 'No'}
								</p>
							</div>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div>
						<h3>post data</h3>
						<button
							className='button'
							type='button'
							onClick={() => handleSubmit('systemReboot', setData, form)}
						>
							Submit Reboot
						</button>
					</div>
				</section>
				<section className='card'>
					{' '}
					<h2>Auth Users</h2>
					<div>
						{' '}
						<h3>get data</h3>
						{data.authUsers ? (
							<div>
								{data.authUsers.users.map((user, index) => (
									<p key={user.name}>
										User {index + 1} Name : {user.name}
									</p>
								))}
							</div>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div>
						<h3>post data</h3>
						<div>
							<form>
								<label>
									Name:
									<CustomInput
										id='create-username'
										name='create-username'
										type='text'
										value={createUser.name ?? ''}
										onChange={e =>
											setCreateUser({ ...createUser, name: e.target.value })
										}
									/>
								</label>
								<label>
									Password:
									<CustomInput
										id='create-password'
										name='create-password'
										type='text'
										value={createUser.password ?? ''}
										onChange={e =>
											setCreateUser({ ...createUser, password: e.target.value })
										}
									/>
								</label>
							</form>
							<button
								className='button'
								type='button'
								onClick={() =>
									handleCreateUser(createUser, setData, setCreateUser)
								}
							>
								Submit
							</button>
						</div>
					</div>
					<div>
						<h3>delete data</h3>
						<div>
							<form>
								<label>
									Name:
									<CustomInput
										id='delete-username'
										name='delete-username'
										type='text'
										value={deleteUser.name ?? ''}
										onChange={e =>
											setDeleteUser({ ...deleteUser, name: e.target.value })
										}
									/>
								</label>
							</form>
							<button
								className='button'
								type='button'
								onClick={() =>
									handleDeleteUser(deleteUser, setData, setDeleteUser)
								}
							>
								Submit
							</button>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Dev
