import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.getByRole('cell', { name: 'Condition' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByRole('button', { name: 'john@foo.com' }).dblclick();
  await page.getByText('StuffNameQuantityConditionActions').click();
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.locator('body').click();
});