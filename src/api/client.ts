import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export type relayState = Record<string, boolean>;

export type matterState = {
  commissioning_window_open: boolean;
  fabrics: number;
  qr_code: string;
  pin_code: string;
};

export type mqttSettings = {
  enabled: boolean;
  host: string;
  port: number;
  user: string;
  pass: string;
};

export type systemRebootRequired = {
  reboot_required: boolean;
};

export async function getRelayState(): Promise<relayState> {
  // Simulate network delay
  //await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.get<relayState>('/relays/state');
  return data;
}

export async function getMatterState(): Promise<matterState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { data } = await api.get<matterState>('/matter/control');
  return data;
}

export async function postRelayState(
  newState: relayState
): Promise<relayState> {
  // Simulate network delay
  //await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.post<relayState>('/relays/state', newState);
  return data;
}

export async function getMqttSettings(): Promise<mqttSettings> {
  // Simulate network delay
  //await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.get<mqttSettings>('/mqtt/settings');
  return data;
}

export async function postMqttSettings(
  newSettings: mqttSettings
): Promise<mqttSettings> {
  // Simulate network delay
  //await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.post<mqttSettings>('/mqtt/settings', newSettings);
  return data;
}

export async function getSystemRebootRequired(): Promise<systemRebootRequired> {
  // Simulate network delay
  //await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.get<systemRebootRequired>(
    '/system/reboot_required'
  );
  return data;
}

export async function postSystemReboot(): Promise<void> {
  await api.post('/system/reboot');
}
