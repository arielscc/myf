const { expect, test } = require('@playwright/test');

test.describe('home page', () => {
  test('renders the Spanish home page', async ({ page }) => {
    await page.goto('/es');

    await expect(page.getByRole('heading', { name: 'Ariel Chura' })).toBeVisible();
    await expect(page.getByText('Mobile & Full Stack Engineer').first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Descargar CV' })).toBeVisible();
    await expect(page.getByRole('heading', { name: /02\.\s*habilidades/i })).toBeVisible();
  });

  test('renders the English locale', async ({ page }) => {
    await page.goto('/en');

    await expect(page.getByRole('button', { name: 'download resume' })).toBeVisible();
    await expect(page.getByRole('heading', { name: /02\.\s*skills/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /03\.\s*education/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /04\.\s*contact/i })).toBeVisible();
  });

  test('exposes primary links', async ({ page }) => {
    await page.goto('/es');

    await expect(page.getByRole('link', { name: 'Ariel Chura - home' })).toHaveAttribute('href', '/');
    await expect(page.getByRole('link', { name: /github profile/i })).toHaveAttribute('href', 'https://github.com/arielscc');
    await expect(page.getByRole('link', { name: /twitter profile/i })).toHaveAttribute('href', 'https://twitter.com/arielschura');
    await expect(page.getByRole('link', { name: /linkedin profile/i })).toHaveAttribute('href', 'https://linkedin.com/in/arielchura');
    await expect(page.getByRole('button', { name: 'Descargar CV' })).toHaveAttribute('href', '/assets/resume_ariel_chura.pdf');
    await expect(page.getByRole('link', { name: 'Mensaje' })).toHaveAttribute('href', 'mailto:ariel.chura.c@gmail.com');
  });

  test('renders certifications', async ({ page }) => {
    await page.goto('/es');

    await expect(page.getByRole('button', { name: /Open certificate: Chatbot/i })).toBeVisible();
    await page.getByRole('tab', { name: 'Platzi' }).click();
    await expect(page.getByRole('link', { name: 'Curso Básico de JavaScript' })).toBeVisible();
  });
});
