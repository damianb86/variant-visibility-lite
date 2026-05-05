import type { Session } from "@shopify/shopify-api";
import type { SessionStorage } from "@shopify/shopify-app-session-storage";

export class PreviewSessionStorage implements SessionStorage {
  private readonly sessions = new Map<string, Session>();

  async storeSession(session: Session) {
    this.sessions.set(session.id, session);
    return true;
  }

  async loadSession(id: string) {
    return this.sessions.get(id);
  }

  async deleteSession(id: string) {
    this.sessions.delete(id);
    return true;
  }

  async deleteSessions(ids: string[]) {
    ids.forEach((id) => this.sessions.delete(id));
    return true;
  }

  async findSessionsByShop(shop: string) {
    return Array.from(this.sessions.values()).filter((session) => session.shop === shop);
  }
}
